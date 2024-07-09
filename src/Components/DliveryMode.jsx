
const DeliveryMode = ({ selectedMode, onChangeMode }) => {
  return (
    <div className="delivery-mode">
      <h3 className="delivery-mode-title">Delivery mode:</h3>
      <label>
        <input
          className="delivery-mode-input1"
          type="checkbox"
          value="store"
          checked={selectedMode === 'store'}
          onChange={() => onChangeMode('store')}
        />
        Store pickup <span>FREE</span>
      </label>
      <label>
        <input
          className="delivery-mode-input2"
          type="checkbox"
          value="home"
          checked={selectedMode === 'home'}
          onChange={() => onChangeMode('home')}
        />
        Home delivery (2 - 4 days) <span>450</span>
      </label>
    </div>
  );
};

export default DeliveryMode;
