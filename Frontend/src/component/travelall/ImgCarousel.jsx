import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ImgCarousel = () => {
 
      const imgContainerDetails = [
        {
            url : 'https://imgs.search.brave.com/g0z5Z6d72n3ZmoD2TXucdS9QjV0Cd_O9Jry0ndkij5w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzA2LzkxLzA5/LzM2MF9GXzMwNjkx/MDkwOV9SNVRwbWhK/RllUengxODFNeFlt/OGIxOG1FMTFmMkJy/Sy5qcGc',
            names : 'Kolkata,WB',
            quantity : '4784'
      },
      {
        url : 'https://imgs.search.brave.com/3a5zNxAS6Ba5WZsQyoDQn3axV6eXKrBaGLVat2fttvY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9scC1j/bXMtcHJvZHVjdGlv/bi5pbWdpeC5uZXQv/MjAxOS0wNi8yODMz/ODkuanBnP2ZpdD1j/cm9wJmFyPTE6MSZ3/PTEyMDAmYXV0bz1m/b3JtYXQmcT03NQ',
        names : 'Agra,UP',
        quantity : '444'
      },
      {
        url : 'https://imgs.search.brave.com/_kr6uce5obuqjYx7TvhXrKRHPzRpYXCrYWqczr7Erns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS41NDIw/NDIzODY4LjkwNjQv/ZmxhdCw3NTB4LDA3/NSxmLXBhZCw3NTB4/MTAwMCxmOGY4Zjgu/anBn',
        names : 'Ayodhya,UP',
        quantity : '3345'
      },
      {
        url : 'https://imgs.search.brave.com/I2g6xn4l4C0sb9ihXdfiqjmmSSOaRhpxIp6MM3aRnRA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NjAyNDc5MC9waG90/by9nYXRld2F5LW9m/LWluZGlhLW11bWJh/aS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QXNTSm1SZDVE/OGtIdHN2SGR6Ymdj/R1NuOGsxTTVxS3RG/SGlkYXVhamRyaz0',
        names : 'Mumbai,MH',
        quantity : '2345'
      },
      {
        url : 'https://imgs.search.brave.com/ytYpF56h27izaQbG1Vghp7DwrSp-FV7tdGeHs86P5Xk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhhZ3dhbmtpcGhv/dG9zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wOC9E/aXZpbml0eS1UaXJ1/cGF0aS1CYWxhamkt/SW1hZ2VzLUhkLTEw/ODBwLVBob3Rvcy1X/YWxscGFwZXItSGQt/UXVhbGl0eS1GcmVl/LURvd25sb2FkLmpw/Zw',
        names : 'Tirupati,AP',
        quantity : '1368'
      },
      {
        url : 'https://imgs.search.brave.com/QIBx_FAIxzxkunjXQ2-z_FKUMMX-DxlPOnEg6rzJRi0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzI5LzUwLzk3/LzM2MF9GXzQyOTUw/OTc3MV8xelJ2blow/NEh2MzQ4eHNkSnVW/MVB0VVAyejJlOGs3/ei5qcGc',
        names : 'Mysuru,KA',
        quantity :'456'
     },
     {
      url : 'https://imgs.search.brave.com/dP1PgnALn5PSvgsZ67KyNS7uz6S9BnHMYddU1U_JUPc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YWltLmV4cGVkaWEu/Y29tL2Rlc3RpbmF0/aW9uLzEvNmQxMGE4/NDJlY2NkNzdmNTFh/MmI0YjM2YjUwMGZj/M2EuanBnP2ltcG9s/aWN5PWZjcm9wJnc9/MTA0MCZoPTU4MCZx/PW1lZGl1bUhpZ2g',
      names : 'Guwahati,AS',
      quantity :'678'
   },
   {
    url : 'https://imgs.search.brave.com/t42IljoplGK787CvCipHUHiBpITp3Yhz_9CHBTPuwJ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2VyYWxhdG91cmlz/bS5vcmcvaW1hZ2Vz/L21pY3Jvc2l0ZXMv/d2F5YW5hZC93YXlu/YWR1LTEwMjR4NzY4/LmpwZw',
    names : 'Wayanad,KL',
    quantity :'523'
   },
   {
    url : 'https://imgs.search.brave.com/05FggSTj2Mce8gSRP8W0qON23DoitYjCaqiPBme4CtY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhbnNpbmRpYXRy/YXZlbHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9jaXR5LXBh/bGFjZS1qYWlwdXIt/Mi5qcGc',
    names : 'Jaipur,RJ',
    quantity :'497'
   },
   {
    url : 'https://imgs.search.brave.com/GuA2BQ6qP8gxaX_iDs-qe906IefeyEODib96K37YBiY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzU3LzEzLzg5/LzM2MF9GXzQ1NzEz/ODkxN19DTUlmd3Y2/VTc4NXluY0F6c0o5/c2dVS3lwV3lGeEU2/NC5qcGc',
    names : 'Narmada,GJ',
    quantity :'323'
   },
   {
    url : 'https://imgs.search.brave.com/H65DFsj7HC9jtJDF3r8qpm6mlBedwkNYCsM7PJXFs5U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIudGhyaWxsb3Bo/aWxpYS5jb20vaW1h/Z2VzL3Bob3Rvcy8w/MDAvMTExLzM1My9v/cmlnaW5hbC8xNDkz/NzI0MTg3XzE3MjE4/NTc1XzE0NjczMTE5/Mzk5NDg3MzZfNDEw/Mzk1NjQ2NzQyMTU0/ODA1N19vLmpwZz9n/cmF2aXR5PWNlbnRl/ciZ3aWR0aD03NTIm/aGVpZ2h0PTQ1MCZj/cm9wPWZpbGwmcXVh/bGl0eT1hdXRvJmZl/dGNoX2Zvcm1hdD1h/dXRvJmZsYWdzPXN0/cmlwX3Byb2ZpbGUm/Zm9ybWF0PWpwZyZz/aWduX3VybD10cnVl',
    names : 'Barnawapara,CG',
    quantity :'289'
   },
   {
    url : 'https://imgs.search.brave.com/wZ5qAGoMko4srTSVQyxkxi5UhY6InEBMaw2jzcwkqFA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGFrZXNoYXBl/LmlvLzg2Y2U5NTI1/LWY1ZjItNGU5Ny04/MWJhLTU0ZThjZTkz/M2RhNy9kZXYvOWQ2/YjhkNzYtOTU4Yi00/MDQ1LTk4YWMtMjE3/NmQ4NDRmMjExL1N1/bmRhcmJhbiUyMFRp/Z2VyLVdpa2lDb21t/b25zMS5qcGc_YXV0/bz1jb21wcmVzcyxm/b3JtYXQmdz0xNDQw',
    names : 'Sundarbans,WB',
    quantity :'2289'
   }
    ];
     
  return (
    <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 500,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 500
      },
      items: 3,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
{/* <div className='flex flex-wrap w-[100%] justify-evenly'> */}
    {imgContainerDetails.map((item,index)=>(
        <div className='relative m-2 rounded-md shadow-md shadow-[#767676]' key={index}>
          <img src={item.url} alt="" className='rounded-t-md h-52 object-cover w-full'/>
          <p className='absolute bottom-12 text-center w-full flex justify-center text-white text-[20px] font-semibold'>{item.names}</p>
          <p className='p-2 flex justify-center'><b className='mr-1'>{item.quantity}</b> Properties&rarr;</p>
        </div>
    ))}
{/* </div> */}

</Carousel>
  )
}
