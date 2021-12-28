const InputGroup = ({ name, changeId, total }) => {
  return (
    <div className="input-group mb-4">
      <select
        onChange={(e) => changeId(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1} key={index}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
