import { useState, useCallback } from 'react';
import { UseRadioOption } from './PropsType';

export const useRadio = (opt: UseRadioOption = {}) => {
    const { setValue, initLabel = '' } = opt;
    const [label, setLabel] = useState(initLabel);

    const _onChange = useCallback(
        e => {
            const val = e.currentTarget.value;
            setValue(val);
        },
        [setValue],
    );

    return {
        label,
        setLabel,
        bind: {
            _onChange,
        },
    };
};

export type UseRadioReturn = ReturnType<typeof useRadio>;

export const useFocus = () => {
    const [focus, setFocus] = useState(false);
    const _onFocus = useCallback(() => {
        setFocus(true);
    }, []);
    const _onBlur = useCallback(() => {
        setFocus(false);
    }, []);

    return {
        focus,
        setFocus,
        _onFocus,
        _onBlur,
    };
};

export const useJoinFn = (...args: any[]) => {
    return useCallback(
        (e: any) => {
            if (args.length) {
                args.map(fn => {
                    try {
                        fn(e);
                    } catch (err) {
                        // console.log(err);
                    }
                });
            }
        },
        [args],
    );
};
