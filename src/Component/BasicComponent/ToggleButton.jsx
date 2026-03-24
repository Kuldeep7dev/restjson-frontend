const ToggleButton = ({ isOpen, onToggle, openText, closeText }) => {
    return (
        <button
            onClick={onToggle}
            className="bg-purple-600 text-white p-3 rounded-sm w-fit
                 transition active:scale-95 flex items-center gap-2"
        >
            {/* make comment  */}
            {isOpen ? closeText : openText}
        </button>
    )
}

export default ToggleButton
