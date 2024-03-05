import { WebUserMode } from '@shared/types';
import { Row } from '../../../../../ui/layout/flex';
import { WebUserModeAdminAction } from './web-user-mode-tabs';
import { getUserMode } from './web-user-mode-tabs.actions';

export async function Admin() {
  const userMode = await getUserMode();
  return (
    <Row>
      <WebUserModeAdminAction userMode={userMode} />
    </Row>
  );
}
