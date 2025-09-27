import { layout } from '../../_config/layout';
import Background from './content/components/Background';
import Content from './content/Content';

export default function Frontpage({ section }) {
  return (
    <div className={layout.page}>
      <Background />
      <Content section={section} />
    </div>
  );
}
