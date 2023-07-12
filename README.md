# ip-address-tracker
- React app using vite to show loaction of IP Address
- Uses API to get details
- Uses Leaflet Map to display location
- Onload displays users IP address and location
- Can search any IP address or domain

# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

<img src="https://github.com/adityaa-more/ip-address-tracker/assets/99107694/3cc4ed3d-b05e-4c6c-90f9-38b067a598ed" width="400">

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/ip-address-tracker-using-reactjs-d2ehT62g1-)
- Live Site URL: [Live site URL](https://trace-ip.netlify.app/)

## My process

### Built with

- Vite-React 
- Tailwind CSS
- CSS Grid
- Mobile-first Workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - For styles
- [MapTiler](https://www.maptiler.com/) - For Map tiles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(`https://ipapi.co/json/`);
        const data = await res.json();
        setAddress(data);
        console.log(data);
      };
      getInitialData();
    } catch (error) {
      console.trace(error);
    }
  }, []);

 <MapContainer
              center={[address.latitude, address.longitude]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=EXz1FCjaWJDfj8xr50rN"
              />
              <Markerposition address={address} />
            </MapContainer>
}
```

### Continued development

Want to continue to focus on to make it theme-responsive map.

### Useful resources

- [Tailwind Docs](https://tailwindcss.com/) - This helped me for understanding tailwind concepts and its uses. I really liked this using it and will use it going forward.
- [React-Leaflet](https://react-leaflet.js.org/) - This is an amazing article which helped me finally understand Leaflet in React. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@adityaa-more](https://www.frontendmentor.io/profile/adityaa-more)

## Acknowledgments

Thanks to a lot of people on [StackOverflow](https://stackoverflow.com/) solving my doubts regarding Leaflets being totally new concept for me.

