import { layout } from '../../_config/layout';
import Background from './content/components/Background';
import Content from './content/Content';

export default function AboutMe() {
  return (
    <div className={layout.page}>
      <Background />
      <Content />
    </div>
  );
}
