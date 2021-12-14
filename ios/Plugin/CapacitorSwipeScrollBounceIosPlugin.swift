import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorSwipeScrollBounceIosPlugin)
public class CapacitorSwipeScrollBounceIosPlugin: CAPPlugin {
    @objc override public func load() {
        self.bridge?.getWebView()?.scrollView.bounces = true
        self.bridge?.webView?.allowsBackForwardNavigationGestures = true
        }
}
