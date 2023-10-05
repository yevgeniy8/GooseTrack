import React from 'react';

import main_page_calendar_desktop1x from '../../images/main_page/main_page_calendar_desktop.png';
import main_page_calendar_desktop2x from '../../images/main_page/main_page_calendar_desktop@2x.png';
import main_page_calendar_tablet1x from '../../images/main_page/main_page_calendar_tablet.png';
import main_page_calendar_tablet2x from '../../images/main_page/main_page_calendar_tablet@2x.png';
import main_page_calendar_mob1x from '../../images/main_page/main_page_calendar_mob.png';
import main_page_calendar_mob2x from '../../images/main_page/main_page_calendar_mob@2x.png';

import main_page_sidebar_desktop1x from '../../images/main_page/main_page_sidebar_desktop.png';
import main_page_sidebar_desktop2x from '../../images/main_page/main_page_sidebar_desktop@2x.png';
import main_page_sidebar_tablet1x from '../../images/main_page/main_page_sidebar_tablet.png';
import main_page_sidebar_tablet2x from '../../images/main_page/main_page_sidebar_tablet@2x.png';
import main_page_sidebar_mob1x from '../../images/main_page/main_page_sidebar_mob.png';
import main_page_sidebar_mob2x from '../../images/main_page/main_page_sidebar_mob@2x.png';

import main_page_all_desktop1x from '../../images/main_page/main_page_all_desktop.png';
import main_page_all_desktop2x from '../../images/main_page/main_page_all_desktop@2x.png';
import main_page_all_tablet1x from '../../images/main_page/main_page_all_tablet.png';
import main_page_all_tablet2x from '../../images/main_page/main_page_all_tablet@2x.png';
import main_page_all_mob1x from '../../images/main_page/main_page_all_mob.png';
import main_page_all_mob2x from '../../images/main_page/main_page_all_mob@2x.png';

import {
    Li,
    SideDiv,
    H1,
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
                        <H1>1.</H1>
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
                                (main_page_calendar_desktop1x,
                                main_page_calendar_desktop2x)
                            }
                            media="(min-width: 1440px)"
                        />
                        <source
                            srcSet={
                                (main_page_calendar_tablet1x,
                                main_page_calendar_tablet2x)
                            }
                            media="(min-width: 768px)"
                        />
                        <Img
                            srcSet={
                                (main_page_calendar_mob1x,
                                main_page_calendar_mob2x)
                            }
                            // width={604}
                            // height={700}
                            alt=""
                        />
                    </picture>
                </Li>
                <Li>
                    <SideDiv>
                        <H1>2.</H1>
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
                                (main_page_sidebar_desktop1x,
                                main_page_sidebar_desktop2x)
                            }
                            media="(min-width: 1440px)"
                        />
                        <source
                            srcSet={
                                (main_page_sidebar_tablet1x,
                                main_page_sidebar_tablet2x)
                            }
                            media="(min-width: 768px)"
                        />
                        <Img
                            srcSet={
                                (main_page_sidebar_mob1x,
                                main_page_sidebar_mob2x)
                            }
                            // width={604}
                            // height={700}
                            alt=""
                        />
                    </picture>
                </Li>
                <Li>
                    <div>
                        <H1>3.</H1>
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
                                (main_page_all_desktop1x,
                                main_page_all_desktop2x)
                            }
                            media="(min-width: 1440px)"
                        />
                        <source
                            srcSet={
                                (main_page_all_tablet1x, main_page_all_tablet2x)
                            }
                            media="(min-width: 768px)"
                        />
                        <Img
                            srcSet={(main_page_all_mob1x, main_page_all_mob2x)}
                            // width={604}
                            // height={700}
                            alt=""
                        />
                    </picture>
                </Li>
            </ul>
        </div>
    );
};

export default Description;
