package com.msbu;

import android.support.annotation.Nullable;

import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

	private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

		@Override
		protected String getJSBundleFile() {
			return CodePush.getJSBundleFile();
		}

		@Override
		protected boolean getUseDeveloperSupport() {
			return BuildConfig.DEBUG;
		}

		@Override
		protected List<ReactPackage> getPackages() {
			return Arrays.<ReactPackage>asList(
					new MainReactPackage(),
					new VectorIconsPackage(),
					new CodePush(BuildConfig.CODEPUSH_KEY, getApplicationContext(), BuildConfig.DEBUG)
			);
		}
	};

	@Override
	public ReactNativeHost getReactNativeHost() {
		return mReactNativeHost;
	}

	@Override
	public boolean isDebug() {
		return BuildConfig.DEBUG;
	}

	@Nullable
	@Override
	public List<ReactPackage> createAdditionalReactPackages() {
//		return Arrays.<ReactPackage>asList(
//				new VectorIconsPackage(),
//				new CodePush(BuildConfig.CODEPUSH_KEY, getApplicationContext(), BuildConfig.DEBUG)
//		);
		return null;
	}
}
