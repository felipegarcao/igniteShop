interface CartProps {
  visible: boolean;
}

export function Cart({ visible }: CartProps) {
  return <>{visible ? <span>a</span> : <span>a</span>}</>;
}
