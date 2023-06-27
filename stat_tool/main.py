from PIL import Image
import os
from moves import moves

name_list = ['Botamon', 'Koromon', 'Agumon', 'Betamon', 'Greymon', 'Devimon', 'Airdramon', 'Tyrannomon', 'Meramon', 'Seadramon', 'Numemon', 'MetalGreymon', 'Mamemon', 'Monzaemon', 'Punimon', 'Tsunomon', 'Gabumon', 'Elecmon', 'Kabuterimon', 'Angemon', 'Birdramon', 'Garurumon', 'Frigimon', 'Whamon', 'Vegiemon', 'SkullGreymon', 'MetalMamemon', 'Vademon', 'Poyomon', 'Tokomon', 'Patamon', 'Kunemon', 'Unimon', 'Ogremon', 'Shellmon', 'Centarumon', 'Bakemon', 'Drimogemon', 'Sukamon', 'Andromon', 'Giromon', 'Etemon', 'Yuramon', 'Tanemon', 'Biyomon', 'Palmon', 'Monochromon', 'Leomon', 'Coelamon', 'Kokatorimon', 'Kuwagamon', 'Mojyamon', 'Nanimon', 'Megadramon', 'Piximon', 'Digitamamon', 'Penguinmon', 'Ninjamon', 'Phoenixmon', 'H-Kabuterimon', 'MegaSeadramon', 'WereGarurumon', 'Panjyamon', 'Gigadramon', 'MetalEtemon', 'Myotismon', 'Yanmamon', 'Gotsumon', 'Flarerizamon', 'WaruMonzaemon', 'SnowAgumon', 'Hyogamon', 'PlatinumSukamon', 'Dokunemon', 'ShimaUnimon', 'Tankmon', 'RedVegiemon', 'J-Mojyamon', 'NiseDrimogemon', 'Goburimon', 'MudFrigimon', 'Psychemon', 'ModokiBetamon', 'ToyAgumon', 'Piddomon', 'Aruraumon', 'Geremon', 'Vermilimon', 'Fugamon', 'Tekkamon', 'MoriShellmon', 'Guardromon', 'Muchomon', 'Icemon', 'Akatorimon', 'Tsukaimon', 'Sharmamon', 'ClearAgumon', 'Weedmon', 'IceDevimon', 'Darkrizamon', 'SandYanmamon', 'SnowGoburimon', 'BlueMeramon', 'Gururumon', 'Saberdramon', 'Soulmon', 'Rockmon', 'Otamamon', 'Gekomon', 'Tentomon', 'WaruSeadramon', 'Meteormon', 'Machinedramon']
item_names = ['sm.recovery', 'med.recovery', 'lrg.recovery', 'sup.recovery', 'MP Floppy', 'Medium MP', 'Large MP', 'Double flop', 'Various', 'Omnipotent', 'Protection', 'Restore', 'Sup.restore', 'Bandage', 'Medicine', 'Off. Disk', 'Def. Disk', 'Hispeed dsk', 'Omni Disk', 'S.Off.disk', 'S.Def.disk', 'S.speed.disk', 'Auto Pilot', 'Off. Chip', 'Def. Chip', 'Brain Chip', 'Quick Chip', 'HP Chip', 'MP Chip', 'DV Chip A', 'DV Chip D', 'DV Chip E', 'Port. potty', 'Trn. manual', 'Rest pillow', 'Enemy repel', 'Enemy bell', 'Health shoe', 'Meat', 'Giant Meat', 'Sirloin', 'Supercarrot', 'Hawk radish', 'Spiny green', 'Digimushrm', 'Ice mushrm', 'Deluxmushrm', 'Digipine', 'Blue apple', 'Red Berry', 'Gold Acorn', 'Big Berry', 'Sweet Nut', 'Super veggy', 'Pricklypear', 'Orange bana', 'Power fruit', 'Power Ice', 'Speed Leaf', 'Sage Fruit', 'Muscle Yam', 'Calm berry', 'Digianchovy', 'Digisnapper', 'DigiTrout', 'Black trout', 'Digicatfish', 'Digiseabass', 'Moldy Meat', 'Happymushrm', 'Chain melon', 'Grey Claws', 'Fireball', 'Flamingwing', 'Iron Hoof', 'Mono Stone', 'Steel drill', 'White Fang', 'Black Wing', 'Spike Club', 'Flamingmane', 'White Wing', 'Torn tatter', 'Electo ring', 'Rainbowhorn', 'Rooster', 'Unihorn', 'Horn helmet', 'Scissor jaw', 'Fertilizer', 'Koga laws', 'Waterbottle', 'North Star', 'Red Shell', 'Hard Scale', 'Bluecrystal', 'Ice crystal', 'Hair grower', 'Sunglasses', 'Metal part', 'Fatal Bone', 'Cyber part', 'Mega Hand', 'Silver ball', 'Metal armor', 'Chainsaw', 'Small spear', 'X Bandage', 'Ray Gun', 'Gold banana', 'Mysty Egg', 'Red Ruby', 'Beetlepearl', 'Coral charm', 'Moon mirror', 'Blue Flute', 'old fishrod', 'Amazing rod', 'Leomonstone', 'Mansion key', 'Gear', 'Rain Plant', 'Steak', 'Frig Key', 'AS Decoder', 'Giga Hand', 'Noble Mane', 'Metalbanana']


def make_directory(name):
    try:
        os.mkdir(name)
    except FileExistsError as e:
        print(e)


def make_size_directories(x, y):
    try:
        make_directory(f'result/{f"{x}x{y}"}')
    except FileExistsError as e:
        print(e)


def add_zeros(number, zeros):
    num_str = ('0' * zeros + str(number))
    return num_str[len(num_str)-3:]


def resize_item_sprites():
    count = 1
    make_size_directories(16, 16)
    make_size_directories(32, 32)
    make_size_directories(48, 48)
    make_size_directories(64, 64)
    make_size_directories(128, 128)
    make_size_directories(256, 256)
    for name in item_names:
        source = Image.open(f'itemSprites/item_{add_zeros(count,3)}.png')
        w, h = source.size
        count += 1
        im = source.copy()
        im.save(f'result/16x16/{name}_{w}x{h}.png')
        im.resize((w * 2, h * 2), Image.NEAREST).save(f'result/32x32/{name}_{w * 2}x{h * 2}.png')
        im = source.copy()
        im.resize((w * 3, h * 3), Image.NEAREST).save(f'result/48x48/{name}_{w * 3}x{h * 3}.png')
        im = source.copy()
        im.resize((w * 4, h * 4), Image.NEAREST).save(f'result/64x64/{name}_{w * 4}x{h * 4}.png')
        im = source.copy()
        im.resize((w * 8, h * 8), Image.NEAREST).save(f'result/128x128/{name}_{w * 8}x{h * 8}.png')
        im = source.copy()
        im.resize((w * 16, h * 16), Image.NEAREST).save(f'result/256x256/{name}_{w * 16}x{h * 16}.png')


def resize_digi_sprites():
    spritesheet = Image.open('digisprites.png')
    count = 0
    make_size_directories(16, 16)
    make_size_directories(32, 32)
    make_size_directories(48, 48)
    make_size_directories(64, 64)
    make_size_directories(128, 128)
    make_size_directories(256, 256)
    for name in name_list:
        source = spritesheet.copy()
        source = source.crop((32 * count, 0, 32 * count + 16, 0 + 16))
        count += 1
        im = source.copy()
        im.save(f'result/16x16/{name}_16x16.png')
        im.resize((32, 32), Image.NEAREST).save(f'result/32x32/{name}_32x32.png')
        im = source.copy()
        im.resize((48, 48), Image.NEAREST).save(f'result/48x48/{name}_48x48.png')
        im = source.copy()
        im.resize((64, 64), Image.NEAREST).save(f'result/64x64/{name}_64x64.png')
        im = source.copy()
        im.resize((128, 128), Image.NEAREST).save(f'result/128x128/{name}_128x128.png')
        im = source.copy()
        im.resize((256, 256), Image.NEAREST).save(f'result/256x256/{name}_256x256.png')


def crop_letters_left_right_transparency():
    #make_directory('with_background/[numbers]')
    background = Image.open('nameBackground.png')
    count = 0
    arr = []
    while count < 253:
        arr.append(-1)
        count += 1;

    '''for img_name in os.listdir(folder_dir):
        if img_name.endswith(".png"):
            print(img_name)
            img = Image.open(f'{folder_dir}/{img_name}')
            #bound_box = img.getbbox()
            #img = img.crop((bound_box[0], 0, bound_box[2], img.size[1]))
            new_img = background.copy()
            #print(bound_box)
            new_img = new_img.crop((0, 0, img.size[0], new_img.size[1]))
            new_img.paste(img, (0, 19), img)
            #new_img.save(f'with_background/[numbers]/{img_name}')
            print(img_name.split('.p')[0])
            print(ord(img_name.split('.p')[0]))
            arr[ord(img_name.split('.p')[0])] = img.size[0]'''
    folder_dir = "serpentine/[upper]"
    for img_name in os.listdir(folder_dir):
        if img_name.endswith(".png"):
            img = Image.open(f'{folder_dir}/{img_name}')
            arr[ord(img_name.split('.p')[0])] = img.size[0]
            if ord(img_name.split('.p')[0]) == 46:
                print("hui")
    folder_dir = "serpentine/[lower]"
    for img_name in os.listdir(folder_dir):
        if img_name.endswith(".png"):
            img = Image.open(f'{folder_dir}/{img_name}')
            arr[ord(img_name.split('.p')[0])] = img.size[0]
    folder_dir = "serpentine/[numbers]"
    for img_name in os.listdir(folder_dir):
        if img_name.endswith(".png"):
            img = Image.open(f'{folder_dir}/{img_name}')
            arr[ord(img_name.split('.p')[0])] = img.size[0]
    print(arr)


if __name__ == '__main__':
    #resize_item_sprites()
    #crop_letters_left_right_transparency()
    movs = []
    for move in moves:
        movs.append(move['name'])
    print('"'+'", "'.join(movs)+'"')
