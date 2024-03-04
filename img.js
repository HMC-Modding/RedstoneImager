import mergeImages from 'merge-images';
 
mergeImages(['/RedstoneImager/un.png', '/RedstoneImager/un.png', '/RedstoneImager/un.png'])
  .then(b64 => document.querySelector('img').src = b64);
