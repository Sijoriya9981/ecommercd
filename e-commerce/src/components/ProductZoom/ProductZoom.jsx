import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
const ProductZoom = () => {

    const [slideIndex, setslideIndex] = useState(0);
    const zoomSlider = useRef();
    const zoomSiderBig = useRef();
    const GoTools = (index) => {
        setslideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSiderBig.current.swiper.slideTo(index);


    }
    return (
        <>
            <div className="flex gap-3">
                <div className="slider w-[20%]">
                    <Swiper
                        ref={zoomSlider}
                        direction={'vertical'}
                        navigation={true}
                        spaceBetween={0}
                        slidesPerView={4}
                        modules={[Navigation]}
                        className="zoomproductsliderthumbs h-[500px] overflow-hidden "
                    >
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'} `} onClick={() => GoTools(0)}>
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781297/1736781294242_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-0-202311201747.jpg" alt="" className="src w-full transition-all group-hover:scale-105 " />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group }${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`} onClick={() => GoTools(1)}>
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" alt="" className="src w-full transition-all group-hover:scale-105 " />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`} onClick={() => GoTools(2)}>
                                <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781299/1736781294291_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-2-202311201747.jpg" alt="" className="src w-full transition-all group-hover:scale-105 " />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? 'opacity-1' : 'opacity-30'}`} onClick={() => GoTools(3)}>
                                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkjOmggapVny_jzt-nZ835v96_LzdG1oCn865mZ8i1Q8wlOLBh" alt="" className="src w-full transition-all group-hover:scale-105 " />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 4 ? 'opacity-1' : 'opacity-30'} `} onClick={() => GoTools(4)}>
                                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyPUx2cXfgMLT-EO3kbG5wVIMJ60uush0odgcS_9BIOaeGP9KU" alt="" className="src w-full transition-all group-hover:scale-105 " />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 5 ? 'opacity-1' : 'opacity-30'}`} onClick={() => GoTools(5)}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3m2JpIfsqZgOUi1LfvdtHyzoEHGfyFR7b1m_Nlnbj8rk7bKr" alt="" className="src w-full transition-all group-hover:scale-105 " />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                        </SwiperSlide>


                    </Swiper>
                </div>
                <div className="zoomcontainer w-[80%] h-[500px] overflow-hidden rounded-md">
                    <Swiper
                        ref={zoomSiderBig}
                        navigation={false}
                        spaceBetween={0}
                        slidesPerView={1}
                        modules={[Pagination, Navigation]}

                    >
                        <SwiperSlide>
                            <InnerImageZoom zoomScale={1} zoomType='hover' src='https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781297/1736781294242_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-0-202311201747.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom zoomScale={1} zoomType='hover' src='https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom zoomScale={1} zoomType='hover' src='https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781299/1736781294291_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-2-202311201747.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom zoomScale={1} zoomType='hover' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkjOmggapVny_jzt-nZ835v96_LzdG1oCn865mZ8i1Q8wlOLBh' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom zoomScale={1} zoomType='hover' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyPUx2cXfgMLT-EO3kbG5wVIMJ60uush0odgcS_9BIOaeGP9KU' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom zoomScale={1} zoomType='hover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3m2JpIfsqZgOUi1LfvdtHyzoEHGfyFR7b1m_Nlnbj8rk7bKr' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default ProductZoom;
