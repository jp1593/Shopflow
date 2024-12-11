import cv2
import numpy as np

net = cv2.dnn.readNetFromCaffe('deploy.prototxt', 'mobilenet_iter_73000.caffemodel')

PERSON_CLASS_INDEX = 15

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()  
    
    if not ret:
        break
    
    blob = cv2.dnn.blobFromImage(frame, 0.007843, (300, 300), (127.5, 127.5, 127.5), swapRB=True, crop=False)
    
    net.setInput(blob)
    detections = net.forward()

    person_count = 0
    
    for i in range(detections.shape[2]):
        confidence = detections[0, 0, i, 2]
        
        if confidence > 0.2:
            idx = int(detections[0, 0, i, 1])
            
            if idx == PERSON_CLASS_INDEX:
                person_count += 1
                box = detections[0, 0, i, 3:7] * np.array([frame.shape[1], frame.shape[0], frame.shape[1], frame.shape[0]])
                (startX, startY, endX, endY) = box.astype("int")
                
                cv2.rectangle(frame, (startX, startY), (endX, endY), (0, 255, 0), 2)
                
    cv2.putText(frame, f"People detected: {person_count}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 0), 2)

    cv2.imshow('Webcam Feed', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
