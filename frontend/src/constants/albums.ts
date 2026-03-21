import abbeyRoadCover from "../assets/images/abbey_road.webp";
import beatlesForSaleCover from "../assets/images/beatles_for_sale.webp";
import hardDaysNightCover from "../assets/images/a_hard_days_night.webp";
import helpCover from "../assets/images/help.webp";
import letItBeCover from "../assets/images/let_it_be.webp";
import magicalMysteryTourCover from "../assets/images/magical_mystery_tour.webp";
import pastMastersCover from "../assets/images/past_masters.webp";
import pleasePleaseMeCover from "../assets/images/please_please_me.webp";
import revolverCover from "../assets/images/revolver.webp";
import rubberSoulCover from "../assets/images/rubber_soul.webp";
import sgtPepperCover from "../assets/images/sgt_pepper.webp";
import whiteAlbumCover from "../assets/images/the_beatles.webp";
import withTheBeatlesCover from "../assets/images/with_the_beatles.webp";
import yellowSubmarineCover from "../assets/images/yellow_submarine.webp";

export const ALBUM_COVER_MAP = {
    "A Hard Day's Night": hardDaysNightCover,
    "Abbey Road": abbeyRoadCover,
    "Beatles for Sale": beatlesForSaleCover,
    "Help!": helpCover,
    "Let It Be": letItBeCover,
    "Magical Mystery Tour": magicalMysteryTourCover,
    "Please Please Me": pleasePleaseMeCover,
    Revolver: revolverCover,
    "Rubber Soul": rubberSoulCover,
    "Sgt. Pepper's Lonely Hearts Club Band": sgtPepperCover,
    Single: pastMastersCover,
    "The Beatles (White Album)": whiteAlbumCover,
    "With the Beatles": withTheBeatlesCover,
    "Yellow Submarine": yellowSubmarineCover
} as const;

export type AlbumName = keyof typeof ALBUM_COVER_MAP;
