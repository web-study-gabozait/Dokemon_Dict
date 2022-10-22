class DataTransform {
  public pokemonTypeTransform(type: string) {
    switch (type) {
      case "flying":
        return {
          color: "#92a9d5",
        };
      case "psychic":
        return {
          color: "#69509a",
        };
      case "fire":
        return {
          color: "#ea0001",
        };
      case "electr":
        return {
          color: "#f5a800",
        };
      case "dragon":
        return {
          color: "#016d69",
        };
      case "grass":
        return {
          color: "#395f0a",
        };
      case "steel":
        return {
          color: "#52433c",
        };
      case "rock":
        return {
          color: "#5b3715",
        };
      case "water":
        return {
          color: "#054477",
        };
      case "normal":
        return {
          color: "#4b4b4b",
        };
      case "fighting":
        return {
          color: "#960114",
        };
      case "ghost":
        return {
          color: "#67097c",
        };
      case "bug":
        return {
          color: "#797701",
        };
      case "poison":
        return {
          color: "#430351",
        };
      case "dark":
        return {
          color: "#90007b",
        };
      case "ice":
        return {
          color: "#01a9ec",
        };
      case "ground":
        return {
          color: "#712d0a",
        };
      case "fairy":
        return {
          color: "#ed6b77",
        };
      default:
      case "fire":
        return {
          color: "#ea0001",
        };
    }
  }
}

export default new DataTransform();
