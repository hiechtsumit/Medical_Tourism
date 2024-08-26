import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image'

import 'react-slideshow-image/dist/styles.css';

export const Slider = ({images}) => {
    // const [slider_photos, setSlider_photos] = useState(images);

    // useEffect(()=>{
    //     setSlider_photos(images)
    // },[images])

    return (
        <div className='w-[100vw]'>
            {images?(
                <Slide indicators={true} duration={4000} transitionDuration={1500} autoplay>
                    {images?.map((each, index) => (
                        // <div key={index} className='w-full h-full'>
                            <img key={index} className='max-h-[60vh] w-full object-cover' alt="Slide Image" src={each?.url} />
                        // </div>
                    ))}
                </Slide>
            ):(<></>)}
        </div>
    );
};


Slider.propTypes = {
    images: PropTypes.array
};
