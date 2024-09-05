import React, {useEffect, useRef} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Portal} from 'react-native-portalize';
import {Modalize} from 'react-native-modalize';

const { width, height } = Dimensions.get('screen');

const BottomSheetView = ({openSheet, modalProps, onClose, children}) => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeModal = () => {
    onClose(true)
  };

  const customOpenAnimation = {
    spring: {
      damping: 300,
      stiffness: 300,
      // speed: 5,
    },
    timing: {
      duration: 500,
    },
  };

  const customCloseAnimation = {
    timing: {
      duration: 500,
    },
  };

  useEffect(() => {
    if (openSheet) {
      onOpen();
    } else {
      closeModal();
      modalizeRef.current?.close();
    }
  }, [closeModal, openSheet]);

  return (
    <Portal>
      <Modalize
        onClosed={closeModal}
        ref={modalizeRef}
        closeAnimationConfig={customCloseAnimation}
        openAnimationConfig={customOpenAnimation}
        {...modalProps}>
        {children}
      </Modalize>
    </Portal>
  );
};

export default BottomSheetView;