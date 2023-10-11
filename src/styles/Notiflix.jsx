import Notiflix from 'notiflix';

Notiflix.Notify.init({
    success: {
        // background: '#FFD2DD',
        // textColor: '#3E85F3',
        // notiflixIconColor: '#3E85F3',
        // 🦢
        background: '#3E85F3',
        notiflixIconColor: '#fff',
    },
    failure: {
        background: '#FD7411',
        notiflixIconColor: '#fff',
    },
});

export default Notiflix;
