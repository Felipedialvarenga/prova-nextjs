export interface iCarCard {
    brand: string;
    model: string;
    picture: string;
    price: number;
    carClickHandler: (carModel: string) => void
}

export interface iDetailPictures {
    color: string;
    pic: string;
}

export interface iCarData {
    brand: string;
    catalogPicture: string;
    detailPictures: iDetailPictures[];
    logo: string;
    model: string;
    price: number;
}

export interface iCarsState {
    cars: iCarData[];
}

export interface iChosedPictureInfo {
    color: string;
    picNumber: number;
    picture: string
}

export interface iArrowButtonProps {
    backgroundColor: string;
    textColor: string;
    direction: string;
    btClickHandler: () => void
}

export interface iPicturePreviewProps {
    src: string;
    picNumber: number;
    pictureClickHandler: (picIdx: number) => void;
    isChosen: (idx: number) => boolean;
}