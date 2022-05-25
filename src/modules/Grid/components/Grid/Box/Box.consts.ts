import { Props } from "./index";

export const DIRECTION: Record<NonNullable<Props['dir']>, string> = {
    row: 'row',
    col: 'column',
};

export const WRAP: Record<NonNullable<Props['wrap']>, string> = {
    no: 'nowrap',
    yes: 'wrap',
};

export const ALIGNMENT: Record<NonNullable<Props['align']>, string> = {
    start: 'alignStart',
    stretch: 'alignStretch',
    center: 'alignCenter',
    base: 'alignBaseline',
    end: 'alignEnd',
}

export const JUSTIFY: Record<NonNullable<Props['justify']>, string> = {
    start: 'justStart',
    end: 'justEnd',
    evenly: 'justEvenly',
    between: 'justBetween',
    center: 'justCenter',
    around: 'justAround',
}
