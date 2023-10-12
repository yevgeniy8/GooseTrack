import Notiflix from 'notiflix';

Notiflix.Notify.init({
    // position: 'right-bottom',
    position: 'right-top',
    // position: 'left-top',
    // position: 'center-top',

    success: {
        background: '#3E85F3',
        notiflixIconColor: '#fff',
    },
    failure: {
        background: '#FD7411',
        notiflixIconColor: '#fff',
    },
});

export default Notiflix;
