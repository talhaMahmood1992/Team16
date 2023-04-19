/* eslint-disable no-extra-parens */
import React from "react";
//import { mediaData } from "../MediaData";
//import MediaFeature from "../Components/MediaRatting";
import { Media } from "../MediaData";
import RatingFeature from "../Components/MediaRatting";
import "./RenderMedia.css"; // Import CSS file for styling

export default function RenderMedia({
    MediaData
}: {
    MediaData: Media[];
}): JSX.Element {
    const mediaList = MediaData.map((Media) => {
        return {
            ...Media
        };
    });
    return (
        <div className="media-list-container">
            <div className="media-list">
                {mediaList.map((mediaItem) => (
                    <div key={mediaItem.movieId} className="media-item">
                        <img src={mediaItem.image} alt={mediaItem.title} />
                        <div className="media-details">
                            {/* <h2 className="media-title">{mediaItem.title}</h2> */}
                            <p className="media-year">
                                {mediaItem.yearReleased}
                            </p>
                            <p className="media-rating">
                                {
                                    <RatingFeature
                                        rating={mediaItem.rating}
                                    ></RatingFeature>
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

//     return (
//         <section className="page">
//             <div className="HeroSection_section_hero__bCGwu">
//                 <div>
//                     {mediaList.map(
//                         (media: {
//                             title: string;
//                             type: string;
//                             yearReleased: number;
//                             rating: number;
//                             movieId: string;
//                             image: string;
//                         }): JSX.Element => mediaToElement(media)
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// }
