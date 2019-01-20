import iframeResize from 'iframe-resizer';

/**
 * Creates a DropInUIClient record to configure the Drop-in UI iframe.
 * 
 * @param iframe The iframe to configure.
 * @returns
 */
function DropInUIClient(iframe) {
	this.iFrameResize = iFrameResize({
		checkOrigin: false
	}, iframe);
}

module.exports = DropInUIClient;