import mergeImages from 'merge-images';
 
mergeImages([
  { src: 'https://hmc-modding.github.io/RedstoneImager/un.png', x: 0, y: 0 },
  { src: 'https://hmc-modding.github.io/RedstoneImager/un.png', x: 64, y: 0 },
  { src: 'https://hmc-modding.github.io/RedstoneImager/un.png', x: 128, y: 0 }
])
  .then(b64 => document.querySelector('img').src = b64);
