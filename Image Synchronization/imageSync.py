import os.path,time
from traceback import print_tb
import cv2

#get created time of file
def get_created_time(file_path):
    return time.ctime(os.path.getctime(file_path))

#file paths
video_file = r'C:\Users\user\Pictures\Camera Roll\WIN_20220418_23_44_47_Pro.mp4'
img_folder = r'C:\Users\user\Documents\ZED'


files = os.listdir(img_folder)
print(files)
sorted_files =  sorted(files)
print(sorted_files)


vid_created = get_created_time(video_file)	
img_created = get_created_time(r'C:\Users\user\Documents\ZED\\'+sorted_files[0])


print(vid_created)
print(img_created)


# convert time into seconds
def convert_time(time_str):
    dateTime = time_str.split(' ')
    t = dateTime[3].split(':')
    h, m, s = t[0], t[1], t[2]
    return int(h) * 3600 + int(m) * 60 + int(s)

video_name = video_file# or any other extension like .avi etc
vidcap = cv2.VideoCapture(video_name)


#framerate of video
fps = int(vidcap.get(cv2.CAP_PROP_FPS))
print('fps: '+ str(fps))


i=0
count = 0
temp = convert_time(vid_created)
while (i < len(sorted_files)):
    success,frame = vidcap.read()
    img_created = get_created_time(r'C:\Users\user\Documents\ZED\\'+sorted_files[i])
    timeDiff = convert_time(img_created) -  convert_time(vid_created)
    if (count % (timeDiff*fps)==0):
        print(timeDiff)
        cv2.imwrite('output'+str(i)+'.png',frame,params=[cv2.IMWRITE_PNG_COMPRESSION,2])
        i+=1
    count += 1
