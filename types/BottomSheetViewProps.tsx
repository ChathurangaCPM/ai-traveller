export interface BottomSheetViewProps {
    openSheet: boolean;
    modalProps?: any;
    onClose: (isClosed: boolean) => void;
    children?: any;
}
