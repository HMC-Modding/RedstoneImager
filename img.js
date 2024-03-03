import mergeImages from 'merge-images';
 
mergeImages(['/un.png', '/un.png', '/un.png'])
  .then(b64 => document.querySelector('img').src = b64);