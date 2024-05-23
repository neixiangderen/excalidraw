import { shield } from "../../packages/excalidraw/components/icons";
import { Tooltip } from "../../packages/excalidraw/components/Tooltip";
import { useI18n } from "../../packages/excalidraw/i18n";

export const EncryptedIcon = () => {
  const { t } = useI18n();

  return (
    <div
      className="encrypted-icon tooltip"
      rel="noopener noreferrer"
      aria-label={t("encrypted.link")}
    >
      {/*       href="https://blog.excalidraw.com/end-to-end-encryption/"
      target="_blank" */}
      {/* <Tooltip label={t("encrypted.tooltip")} long={true}>
        {shield}
      </Tooltip> */}
      {shield}
    </div>
  );
};
