import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Button } from 'antd';
import { createCn } from "bem-react-classname/create-cn";

import { useCarouselLimit } from './Carousel.hooks';
import { useBreakpoint } from '../../shared/hooks/useBreakpoint';
import './styles.less';

const prefixCls = 'record-carousel';
const cn = createCn(prefixCls);

type CarouselProps = {
    slidesToShow?: number;
    offset?: number;
    responsive?: boolean;
    limitShow?: number;
    withBlur?: boolean;
    padding?: 'small' | 'middle' | 'large';
    customButtons?: { prev: ReactElement, next: ReactElement };
    floatingButtons?: boolean;
    hideButtonsOnLimits?: boolean;
    speed?: 'slow' | 'normal' | 'fast';
};

export const Carousel: FC<CarouselProps> = ({
    children,
    slidesToShow = 1,
    offset = 0,
    responsive = false,
    limitShow = 0,
    withBlur= true,
    padding = 'middle',
    customButtons,
    floatingButtons= false,
    hideButtonsOnLimits = true,
    speed= 'fast',
}) => {
    /*Состояния слайдера position - позиция в % относительно начала, activeIdx - активный слайд (начало с 0)*/
    const [position, setPosition] = useState<number>(0);
    const [activeIdx, setActiveIdx] = useState(0);

    const currentBreakPoint = useBreakpoint();
    const limit = limitShow || React.Children.count(children);
    let showSlide = slidesToShow;

    if (responsive && slidesToShow > 1 && currentBreakPoint === 'md') {
        showSlide = 2;
    }

    /*Ограничение массива данных, если установлен лимит*/
    const data = React.Children.toArray(children).slice(0, limit);

    /*Переменные необходимые для расчетов в ф-ях (handleNextSlide, handlePrevSlide, checkLimits)*/
    const widthCard = 100 / (showSlide + offset);
    const sliderLength = data?.length || 0;
    const countRestSlide = sliderLength % showSlide || showSlide;
    const stay = (100 - widthCard * showSlide) / 2;

    /*Хуки для отслеживания текущего положения карусели*/
    const { isEndSlider, isStartSlider, shouldGoToEndSlider } = useCarouselLimit(
        activeIdx,
        sliderLength,
        showSlide,
    );

    /*Эффект. При изменении количества слайдов производим возврат в начало и перерасчет лимитов*/
    useEffect(() => {
        setActiveIdx(0);
        setPosition(0);
    }, [showSlide, offset, children]);

    const handleNextSlide = (): void => {
        if (isStartSlider && shouldGoToEndSlider) {
            setPosition((prev) => prev + widthCard * countRestSlide - stay * 2);
            setActiveIdx((prev) => prev + countRestSlide);
            return;
        }

        if (isEndSlider) {
            setPosition((prev) => prev);
            return;
        }

        if (offset && shouldGoToEndSlider) {
            setPosition((prev) => prev + widthCard * countRestSlide - stay);
            setActiveIdx((prev) => prev + countRestSlide);
            return;
        }

        if (shouldGoToEndSlider) {
            setPosition((prev) => prev + widthCard * countRestSlide);
            setActiveIdx((prev) => prev + countRestSlide);
            return;
        }

        if (activeIdx === 0) {
            setPosition((prev) => prev + widthCard * showSlide - stay);
        } else {
            setPosition((prev) => prev + widthCard * showSlide);
        }

        setActiveIdx((prev) => prev + showSlide);
    };

    const handlePrevSlide = (): void => {
        if (activeIdx - showSlide === 0 || activeIdx - showSlide < 0) {
            setPosition(0);
            setActiveIdx(0);
            return;
        }

        if (offset && isEndSlider) {
            setPosition((prev) => prev - widthCard * countRestSlide + stay);
            setActiveIdx((prev) => prev - countRestSlide);
            return;
        }

        setPosition((prev) => prev - widthCard * showSlide);
        setActiveIdx((prev) => prev - showSlide);
    };

    return (
        <div className={cn('slider')}>
            <div className={cn('carousel')}>
                <div className={cn('content')}>
                    <div className={cn( 'blur',{ start: withBlur && !isStartSlider })}></div>
                    <div
                        className={cn('inner', { speed })}
                        style={{ transform: `translateX(-${position}%)` }}
                    >
                        {data.map((child, i) => (
                            <div
                                className={cn('item', { padding })}
                                style={{ flexBasis: `${widthCard}%` }}
                                key={i}
                            >
                                {child}
                            </div>
                        ))}
                    </div>
                    <div className={cn('blur', { end: withBlur && !isEndSlider })}></div>
                </div>
            </div>
            <div className={cn('footer')}>
                {
                    hideButtonsOnLimits && isStartSlider
                        ? null
                        : (
                            <div className={cn('btn', {prev: floatingButtons})}>
                                {
                                    customButtons?.prev
                                        ? React.cloneElement(
                                        customButtons.prev,
                                        {
                                                onClick: handlePrevSlide,
                                                disabled: isStartSlider
                                          })
                                        : (<Button onClick={handlePrevSlide} disabled={isStartSlider}>Prev</Button>)
                                }
                            </div>
                        )
                }
                {
                    hideButtonsOnLimits && isEndSlider
                        ? null
                        : (
                            <div className={cn('btn', {next: floatingButtons})}>
                                {
                                    customButtons?.next
                                        ? React.cloneElement(
                                        customButtons.next,
                                        {
                                                onClick: handleNextSlide,
                                                disabled: isEndSlider
                                            })
                                        : (<Button onClick={handleNextSlide} disabled={isEndSlider}>Next</Button>)
                                }
                            </div>
                        )
                }
            </div>
        </div>
    );
};


