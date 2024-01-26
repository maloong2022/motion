"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useSettings } from "@/hooks/use-settings";

import { Label } from "@/components/ui/label";

import { ModeToggle } from "@/components/mode-toggle";

export const SettingsModal = () => {
  const settings = useSettings();
  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg text-[#3F3F3F] dark:text-[#CFCFCF]  font-medium">
            My Settings
          </h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>
              <span className="text-[#3F3F3F] dark:text-[#CFCFCF]">
                Appearance
              </span>
            </Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Motoin looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
