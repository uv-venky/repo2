import { auth } from 'venky-core/auth';
import { redirect } from 'next/navigation';
import { LoginPageContent } from 'venky-core/ui';
import { Repo2LoginLogo } from './repo2-login-logo';
import { REPO2_LOGIN_BACKGROUND_CLASS } from './repo2-login-background';
import { REPO2_LOGIN_TABS } from './repo2-login-tabs';
import { REPO2_LOGIN_LEGAL_NOTICE } from './repo2-login-legal';

export default async function LoginPage() {
  const session = await auth(true);

  if (session) {
    redirect('/');
    return null;
  }

  return (
    <LoginPageContent
      logo={Repo2LoginLogo}
      backgroundClassName={REPO2_LOGIN_BACKGROUND_CLASS}
      tabs={REPO2_LOGIN_TABS}
      legalNotice={REPO2_LOGIN_LEGAL_NOTICE}
    />
  );
}
