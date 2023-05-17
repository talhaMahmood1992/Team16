import slugify from "react-slugify";
import { MediaInterface } from "../interfaces/MediaInterface";
import { nanoid } from "nanoid";

export const addImageToMedia = (media: MediaInterface[]) => {
    return media.map((media: MediaInterface) => ({
        ...media,
        image: mediaImageHandler(media)
    }));
};

export const removeImageFromMedia = (media: MediaInterface[]) => {
    return media.map((media: MediaInterface) => ({
        ...media,
        image: `${slugify(media.title)}.jpg`
    }));
};

export const addMediaId = (media: MediaInterface[]) => {
    return media.map((media: MediaInterface) => ({
        ...media,
        mediaId: nanoid()
    }));
};

export const removeMediaId = (media: MediaInterface[]) => {
    const copiedMedia = [...media];
    copiedMedia.map((media: MediaInterface) => delete media.mediaId);
    return copiedMedia;
};

export const mediaImageHandler = (media: MediaInterface) => {
    let image;
    try {
        image = require(`../imgs/media-covers/${media.image}`);
    } catch (error) {
        image = require("../imgs/media-covers/default-media-img.jpg");
    }
    return image;
};

// export const filterMediaHandler = (media: MediaInterface[] )
