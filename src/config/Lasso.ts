/**
 * Define the lasso configurations
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as path from 'path'

class Lasso {
	public static init (): any {
		return {
			plugins: [
				'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
			],
			outputDir: path.join(__dirname, '../../public/static'), // Place all generated JS/CSS/etc. files into the "static" dir
			urlPrefix: '/public/static',
			bundlingEnabled: true, // Only enable bundling in production
			minify: true, // Only minify JS and CSS code in production
			fingerprintsEnabled: true, // Only add fingerprints to URLs in production
			bundles: [
				{
					name: 'jquery',
					dependencies: [
						'require: jquery'
					]
				},
				{
					name: 'bootstrap',
					dependencies: [
						'require: bootstrap/dist/js/bootstrap.bundle.min.js'
					]
				}
			]
		}
	}
}

export default Lasso
