Issues:
- Missing unsubscribe() in message-composer.component.ts
- Using default ChangeDetectionStrategy instead of OnPush
  - Such results in more frequent, and unnecessary, checks which impacts
    performance.
- Lighthouse can't audit localhost on an Ubuntu guest VM, so no performance results are available.
- 
