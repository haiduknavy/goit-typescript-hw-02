/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}

class Component<T> {
  props: T;

  constructor(props: T) {
    this.props = props;
  }
}

class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
