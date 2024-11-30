export var cateorySettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 16,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };


  export const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  
  export const filterData = (data, type) => {
    const { start_date, end_date, guest, destination } = type;
  
    return data.filter((item) => {
      // if(!guest && destination){
      //   return !destination || (item.acf?.location?.toLowerCase()?.includes(destination.toLowerCase()) ?? false);
      // }
      const matchesLocation = !destination || (item.acf?.location?.toLowerCase()?.includes(destination.toLowerCase()) ?? false);
      const matchesGuest = !guest || (item.acf?.room_types?.some((room) => room?.total_guests === guest) ?? false);
  
      return matchesGuest && matchesLocation;
    });
  };