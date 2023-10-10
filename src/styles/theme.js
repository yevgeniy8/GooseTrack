const common = {
    colors: {
        brand: '#3E85F3',
        secondary: '#DCEBF7',

        colorLow: '#3E85F3',
        bgColorLow: '#CEEEFD',
        colorMedium: '#F3B249',
        bgColorMedium: '#FCF0D4',
        colorHigh: '#EA3D65',
        bgColorHigh: '#FFD2DD',

        correct: '#3CBC81',
        error: '#E74A3B',
        errorMessage: '#da1414',

        editBtn: '#3E85F3',
        editBtnHover: '#fff',
        deleteFeedbackBtn: '#ea3d65',

        white: '#fff',
        black: '#111',
        text: '#111',

        textMonthDay: '#3E85F3',

        placeholder: '#DCE3E5',

        backgroundModalTaskCanceled: '#EFEFEF',
        backgroundBrand: '#3E85F3',
        backgroundBtn: '#3E85F3',
        backgroundBtnHover: '#2B78EF',
        backgroundEditBtnHover: '#3E85F3',
        backgroundDeleteFeedbackBtn: 'rgba(234, 61, 101, 0.2)',

        icon: '#84828A',
        iconHover: '#3E85F3',
    },

    shadows: {
        logOutBtn: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
        text: '0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07)',
        modalTask: '0px 4px 16px 0px rgba(17, 17, 17, 0.10)',
    },

    borders: {
        inputDefault: '1px solid rgba(17, 17, 17, 0.15)',
        inputHover: '1px solid #111',
        inputError: '1px solid #E74A3B',
        inputCorrect: '1px solid #3CBC81',
        avatar: '1.8px solid #3E85F3',
        avatarUserProfile: '2px solid #3E85F3',
        rightMonthActive: '1px solid rgba(62, 133, 243, 0.20)',
    },

    borderRadius: {
        monthDay: '8px 0px 0px 8px',
        xs: '8px',
        s: '14px',
        m: '16px',
        l: '29px',
        xl: '44px',
        xxl: '124px',
    },

    fontFamily: {
        fontInter: 'Inter, sans-serif',
    },

    fontWeight: {
        r: 400,
        m: 500,
        sb: 600,
        b: 700,
    },

    fontSizes: {
        xxs: '10px',
        xs: '12px',
        s: '14px',
        m: '16px',
        l: '18px',
        xl: '20px',
        xxl: '24px',
        xxxl: '32px',
        xxxxl: '40px',
    },

    breakpoints: {
        s: '375px',
        m: '768px',
        l: '1440px',
    },

    animations: {
        cubicBezier: 'cubic-bezier(0.4, 0, 0.2, 1)',
        duration: '250ms',
    },
};

export const lightTheme = {
    current: {
        theme: 'light',
    },
    colors: {
        ...common.colors,

        textPrimary: '#343434',
        nameDay: '#343434',
        textTitleHeader: '#111',
        textTitleLogo: '#3E85F3',
        textTitleSideBar: 'rgba(52, 52, 52, 0.50)',
        textSideBar: 'rgba(52, 52, 52, 0.50)',
        textSideBarHover: '#3E85F3',
        textSideBarCurrentPage: '#3E85F3',
        textUserName: '#343434',

        textMonthDayActive: '#3E85F3',
        textTitleModalTask: 'rgba(52, 52, 52, 0.8)',

        backgroundPrimary: '#F7F6F9',
        backgroundSecondary: '#fff',
        backgroundSideBar: '#fff',
        backgroundSideBarCurrentPage: '#E3F3FF',
        backgroundSideBarPageHover: '#E3F3FF',
        backgroundModalTask: '#fff',
        backgroundModalTaskForm: '#F6F6F6',
        backgroundModal: '#fff',
        backgroundFeedbackInput: '#F6F6F6',

        backgroundBtnCancel: '#E5EDFA',
        backgroundBtnCancelHover: '#cae8ff',
        backgroundMonthDay: '#E3F3FF',
        backgroundMonthDayActive: '#CAE8FF',
        backgroundScrollbar: '#F2F2F2',
        backgroundHorizontalScroll: '#F2F2F2',

        statisticsLine: '#E3F3FF',
        iconTasks: '#111',
        iconSideBar: 'rgba(52, 52, 52, 0.50)',
        iconSideBarActive: '#3E85F3',
        sliderMonthDay: '#343434',
        sliderMonthDayDisabled: '#DCE3E5',
        scrollbar: '#E7E5E5',
        horizontalScroll: '#E7E5E5',
        userDefaults: 'rgba(62, 133, 243, 0.18)',
        buttonAddTaskHover: '#cbe6ff',
        buttonCancelHover: '#343434',
    },

    shadows: {
        ...common.shadows,
        feedbackForm: '0px 4px 16px 0px rgba(17, 17, 17, 0.1)',
    },
    borders: {
        ...common.borders,

        sideBar: '1px solid rgba(220, 227, 229, 0.50)',
        statisticsSection: '0.8px solid #E3F3FF',
        addTask: '1px dashed #3E85F3',
        calendar: '1px solid rgba(220, 227, 229, 0.80)',
        rightMonth: '1px solid rgba(62, 133, 243, 0.20)',
        modalTask: '1px solid rgba(220, 227, 229, 0.80)',
        feedbackInput: 'none',
    },

    borderRadius: {
        ...common.borderRadius,
    },
    fontFamily: {
        ...common.fontFamily,
    },
    fontWeight: {
        ...common.fontWeight,
    },
    fontSizes: {
        ...common.fontSizes,
    },
    breakpoints: {
        ...common.breakpoints,
    },
    animations: {
        ...common.animations,
    },
};

export const darkTheme = {
    current: {
        theme: 'dark',
    },
    colors: {
        ...common.colors,

        textPrimary: '#fff',
        nameDay: 'rgba(250, 250, 250, 0.30)',
        textTitleHeader: '#fff',
        textTitleLogo: '#fff',
        textTitleSideBar: 'rgba(250, 250, 250, 0.30)',
        textSideBar: '#fff',
        textSideBarHover: '#fff',
        textSideBarCurrentPage: '#fff',
        textUserName: '#fff',

        textMonthDayActive: '#fff',
        textTitleModalTask: 'rgba(250, 250, 250, 0.30)',

        backgroundPrimary: '#171820',
        backgroundSecondary: '#21222C',
        backgroundSideBar: '#13151A',
        backgroundSideBarCurrentPage: '#3E85F3',
        backgroundSideBarPageHover: '#3E85F3',
        backgroundModalTask: '#171820',
        backgroundModalTaskForm: '#171820',
        backgroundModal: '#171820',
        backgroundFeedbackInput: 'transparent',

        backgroundBtnCancel: '#21222C',
        backgroundBtnCancelHover: '#fff',
        backgroundMonthDay: '#21222C',
        backgroundMonthDayActive: '#3E85F3',
        backgroundScrollbar: '#2D3037',
        backgroundHorizontalScroll: '#21222C',

        backgroundEditBtn: '#353647',

        statisticsLine: '#rgba(227, 243, 255, 0.15)',
        iconTasks: '#fff',
        iconSideBar: '#ffffff',
        iconSideBarActive: '#fff',
        sliderMonthDay: '#fff',
        sliderMonthDayDisabled: 'rgba(255, 255, 255, 0.15)',
        scrollbar: '#171820',
        horizontalScroll: '#2D3037',
        userDefaults: 'rgba(255, 255, 255, 0.18)',
        buttonAddTaskHover: '#2B78EF',
        buttonCancelHover: '#343434',
    },

    shadows: {
        ...common.shadows,
        feedbackForm: '0px 4px 57px 0px rgba(17, 17, 17, 0.05)',
    },
    borders: {
        ...common.borders,

        sideBar: 'none',
        statisticsSection: 'none',
        addTask: 'none',
        calendar: '1px solid rgba(255, 255, 255, 0.15)',
        rightMonth: '1px solid rgba(255, 255, 255, 0.15)',
        modalTask: 'none',
        feedbackInput: '1px solid rgba(255, 255, 255, 0.15)',
    },

    borderRadius: {
        ...common.borderRadius,
    },
    fontFamily: {
        ...common.fontFamily,
    },
    fontWeight: {
        ...common.fontWeight,
    },
    fontSizes: {
        ...common.fontSizes,
    },
    breakpoints: {
        ...common.breakpoints,
    },
    animations: {
        ...common.animations,
    },
};
