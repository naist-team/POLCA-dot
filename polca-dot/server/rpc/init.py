import csv


def init_setup():
    with open('message_list.csv', 'a') as f:
        f.write('')


def send_massage(args):
    print(args)
    content = args['content']
    mes_info_list=[]
    for key in content:
        mes_info_list.append(content[key])
    with open('message_list.csv', 'a') as f:
        writer = csv.writer(f, lineterminator='\n') # 改行コード（\n）を指定しておく
        writer.writerow(mes_info_list) 
    return {'result':'ok'}

def get_message(args):
    messages_list = []
    with open('message_list.csv', 'r') as f:
        reader = csv.reader(f)
        for row in reader:
            mes_dict={}
            mes_dict['user_name'] = row[0]
            mes_dict['profile_image'] = row[1]
            mes_dict['text'] = row[2]
            messages_list.append(mes_dict)
    return {'result':'ok', 'msgs':messages_list}

if __name__ == '__main__':
    greeting(**kwargs)