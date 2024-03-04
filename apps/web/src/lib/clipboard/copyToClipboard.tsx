import { notification } from '@/ui/components/notification';

type CopyToClipboardOptions = {
  hideNotification?: boolean;
};

export function copyToClipboard(copyText: string, options?: CopyToClipboardOptions): void {
  navigator.clipboard.writeText(copyText);

  if (!options?.hideNotification) {
    notification.success({
      title: 'Copied to clipboard',
    });
  }
}
