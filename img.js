import mergeImages from 'merge-images';
 
mergeImages(['/un.png', '/un.png', '/mouth.png'])
  .then(b64 => document.querySelector('img').src = b64);