import os
from PIL import Image
from PIL import ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES = True


class SpriteSheetOperator:
    def __init__(self, spritesheet_path):
        self.spritesheet = Image.open(spritesheet_path)

    def get_sprite_from_spritesheet(self, x, y, w, h):
        return self.spritesheet.crop((x, y, w, h))



