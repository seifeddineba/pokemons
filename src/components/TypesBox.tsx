function TypesBox(props: any) {
  return (
    <div className="types-box">
      {props.types &&
        props.types.pokemon_v2_type.length > 0 &&
        props.types.pokemon_v2_type.map((type: any) => (
          <span key={type.id} onClick={() => props.handleSearchType(type.id)}>
            {type.name}
          </span>
        ))}
    </div>
  );
}

export default TypesBox;
