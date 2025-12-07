import abbeyRoadCover from "../assets/images/abbey_road.jpg";
import beatlesForSaleCover from "../assets/images/beatles_for_sale.jpg";
import hardDaysNightCover from "../assets/images/a_hard_days_night.jpg";
import helpCover from "../assets/images/help.png";
import letItBeCover from "../assets/images/let_it_be.png";
import magicalMysteryTourCover from "../assets/images/magical_mystery_tour.jpg";
import pastMastersCover from "../assets/images/past_masters.png";
import pleasePleaseMeCover from "../assets/images/please_please_me.png";
import revolverCover from "../assets/images/revolver.jpg";
import rubberSoulCover from "../assets/images/rubber_soul.png";
import sgtPepperCover from "../assets/images/sgt_pepper.jpg";
import whiteAlbumCover from "../assets/images/the_beatles.jpg";
import withTheBeatlesCover from "../assets/images/with_the_beatles.png";
import yellowSubmarineCover from "../assets/images/yellow_submarine.jpg";

export const albumNameCoverMap: Record<string, string> = {
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
