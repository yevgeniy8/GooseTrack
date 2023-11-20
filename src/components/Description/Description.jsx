import React from 'react';

import main_page_calendar_desktop1x from '../../images/main_page/main_page_calendar_desktop.jpg';
import main_page_calendar_desktop1x_webp from '../../images/main_page/main_page_calendar_desktop.webp';
import main_page_calendar_desktop2x from '../../images/main_page/main_page_calendar_desktop@2x.jpg';
import main_page_calendar_desktop2x_webp from '../../images/main_page/main_page_calendar_desktop@2x.webp';
import main_page_calendar_tablet1x from '../../images/main_page/main_page_calendar_tablet.jpg';
import main_page_calendar_tablet1x_webp from '../../images/main_page/main_page_calendar_tablet.webp';
import main_page_calendar_tablet2x from '../../images/main_page/main_page_calendar_tablet@2x.jpg';
import main_page_calendar_tablet2x_webp from '../../images/main_page/main_page_calendar_tablet@2x.webp';
import main_page_calendar_mob1x from '../../images/main_page/main_page_calendar_mob.jpg';
import main_page_calendar_mob1x_webp from '../../images/main_page/main_page_calendar_mob.webp';
import main_page_calendar_mob2x from '../../images/main_page/main_page_calendar_mob@2x.jpg';
import main_page_calendar_mob2x_webp from '../../images/main_page/main_page_calendar_mob@2x.webp';

import main_page_sidebar_desktop1x from '../../images/main_page/main_page_sidebar_desktop.jpg';
import main_page_sidebar_desktop1x_webp from '../../images/main_page/main_page_sidebar_desktop.webp';
import main_page_sidebar_desktop2x from '../../images/main_page/main_page_sidebar_desktop@2x.jpg';
import main_page_sidebar_desktop2x_webp from '../../images/main_page/main_page_sidebar_desktop@2x.webp';
import main_page_sidebar_tablet1x from '../../images/main_page/main_page_sidebar_tablet.jpg';
import main_page_sidebar_tablet1x_webp from '../../images/main_page/main_page_sidebar_tablet.webp';
import main_page_sidebar_tablet2x from '../../images/main_page/main_page_sidebar_tablet@2x.jpg';
import main_page_sidebar_tablet2x_webp from '../../images/main_page/main_page_sidebar_tablet@2x.webp';
import main_page_sidebar_mob1x from '../../images/main_page/main_page_sidebar_mob.jpg';
import main_page_sidebar_mob1x_webp from '../../images/main_page/main_page_sidebar_mob.webp';
import main_page_sidebar_mob2x from '../../images/main_page/main_page_sidebar_mob@2x.jpg';
import main_page_sidebar_mob2x_webp from '../../images/main_page/main_page_sidebar_mob@2x.webp';

import main_page_all_desktop1x from '../../images/main_page/main_page_all_desktop.jpg';
import main_page_all_desktop1x_webp from '../../images/main_page/main_page_all_desktop.webp';
import main_page_all_desktop2x from '../../images/main_page/main_page_all_desktop@2x.jpg';
import main_page_all_desktop2x_webp from '../../images/main_page/main_page_all_desktop@2x.webp';
import main_page_all_tablet1x from '../../images/main_page/main_page_all_tablet.jpg';
import main_page_all_tablet1x_webp from '../../images/main_page/main_page_all_tablet.webp';
import main_page_all_tablet2x from '../../images/main_page/main_page_all_tablet@2x.jpg';
import main_page_all_tablet2x_webp from '../../images/main_page/main_page_all_tablet@2x.webp';
import main_page_all_mob1x from '../../images/main_page/main_page_all_mob.jpg';
import main_page_all_mob1x_webp from '../../images/main_page/main_page_all_mob.webp';
import main_page_all_mob2x from '../../images/main_page/main_page_all_mob@2x.jpg';
import main_page_all_mob2x_webp from '../../images/main_page/main_page_all_mob@2x.webp';

import {
    Li,
    SideDiv,
    Number,
    H2,
    H2All,
    P,
    TextDescription,
    Img,
} from './Description.styled';

const Description = () => {
    return (
        <div>
            <ul>
                <Li>
                    <div>
                        <Number>1.</Number>
                        <H2>Calendar</H2>
                        <P>view</P>
                        <TextDescription>
                            GooseTrack's Calendar view provides a comprehensive
                            overview of your schedule, displaying all your
                            tasks, events, and appointments in a visually
                            appealing and intuitive layout.
                        </TextDescription>
                    </div>

                    <picture>
                        <source
                            srcSet={
                                (main_page_calendar_mob1x_webp,
                                main_page_calendar_mob2x_webp)
                            }
                            media="(max-width: 767px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={
                                (main_page_calendar_mob1x,
                                main_page_calendar_mob2x)
                            }
                            media="(max-width: 767px)"
                            type="image/jpg"
                        />
                        <source
                            srcSet={
                                (main_page_calendar_tablet1x_webp,
                                main_page_calendar_tablet2x_webp)
                            }
                            media="(min-width: 768px) and (max-width: 1439px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={
                                (main_page_calendar_tablet1x,
                                main_page_calendar_tablet2x)
                            }
                            media="(min-width: 768px) and (max-width: 1439px)"
                            type="image/jpg"
                        />
                        <source
                            srcSet={
                                (main_page_calendar_desktop1x_webp,
                                main_page_calendar_desktop2x_webp)
                            }
                            media="(min-width: 1440px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={
                                (main_page_calendar_desktop1x,
                                main_page_calendar_desktop2x)
                            }
                            media="(min-width: 1440px)"
                            type="image/jpg"
                        />
                        <Img src={main_page_calendar_mob1x} alt="calendar" />
                    </picture>
                </Li>
                <Li>
                    <SideDiv>
                        <Number>2.</Number>
                        <P>Sidebar</P>
                        <TextDescription>
                            GooseTrack offers easy access to your account
                            settings, calendar, and filters. The "My Account"
                            section allows you to manage your profile
                            information and preferences, while the calendar
                            provides a quick and convenient way to view your
                            upcoming events and tasks.
                        </TextDescription>
                    </SideDiv>

                    <picture>
                        <source
                            srcSet={
                                (main_page_sidebar_mob1x_webp,
                                main_page_sidebar_mob2x_webp)
                            }
                            media="(max-width: 767px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={
                                (main_page_sidebar_mob1x,
                                main_page_sidebar_mob2x)
                            }
                            media="(max-width: 767px)"
                            type="image/jpg"
                        />
                        <source
                            srcSet={
                                (main_page_sidebar_tablet1x_webp,
                                main_page_sidebar_tablet2x_webp)
                            }
                            media="(min-width: 768px) and (max-width: 1439px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={
                                (main_page_sidebar_tablet1x,
                                main_page_sidebar_tablet2x)
                            }
                            media="(min-width: 768px) and (max-width: 1439px)"
                            type="image/jpg"
                        />
                        <source
                            srcSet={
                                (main_page_sidebar_desktop1x_webp,
                                main_page_sidebar_desktop2x_webp)
                            }
                            media="(min-width: 1440px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={
                                (main_page_sidebar_desktop1x,
                                main_page_sidebar_desktop2x)
                            }
                            media="(min-width: 1440px)"
                            type="image/jpg"
                        />
                        <Img src={main_page_sidebar_mob1x} alt="calendar" />
                    </picture>
                </Li>
                <Li>
                    <div>
                        <Number>3.</Number>
                        <H2All>all in</H2All>
                        <P>one</P>
                        <TextDescription>
                            GooseTrack is an all-in-one productivity tool that
                            helps you stay on top of your tasks, events, and
                            deadlines. Say goodbye to scattered to-do lists and
                            hello to streamlined productivity with GooseTrack.
                        </TextDescription>
                    </div>

                    <picture>
                        <source
                            srcSet={
                                (main_page_all_mob1x_webp,
                                main_page_all_mob2x_webp)
                            }
                            media="(max-width: 767px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={(main_page_all_mob1x, main_page_all_mob2x)}
                            media="(max-width: 767px)"
                            type="image/jpg"
                        />
                        <source
                            srcSet={
                                (main_page_all_tablet1x_webp,
                                main_page_all_tablet2x_webp)
                            }
                            media="(min-width: 768px) and (max-width: 1439px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={
                                (main_page_all_tablet1x, main_page_all_tablet2x)
                            }
                            media="(min-width: 768px) and (max-width: 1439px)"
                            type="image/jpg"
                        />
                        <source
                            srcSet={
                                (main_page_all_desktop1x_webp,
                                main_page_all_desktop2x_webp)
                            }
                            media="(min-width: 1440px)"
                            type="image/webp"
                        />
                        <source
                            srcSet={
                                (main_page_all_desktop1x,
                                main_page_all_desktop2x)
                            }
                            media="(min-width: 1440px)"
                            type="image/jpg"
                        />
                        <Img src={main_page_all_mob1x} alt="calendar" />
                    </picture>
                </Li>
            </ul>
        </div>
    );
};

export default Description;
