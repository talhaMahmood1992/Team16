import slugify from "react-slugify";
import { MediaInterface } from "../interfaces/MediaInterface";
import { nanoid } from "nanoid";

export const addImageToMedia = (media: MediaInterface[]) => {
    return media.map((media: MediaInterface) => ({
        ...media,
        image: require(`../imgs/media-covers/${media.image}`)
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
