package com.msbu;

import android.support.annotation.Nullable;

import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactPackage;
import com.tencent.bugly.crashreport.CrashReport;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

	@Override
	public void onCreate() {
		super.onCreate();
		CrashReport.initCrashReport(getApplicationContext(), BuildConfig.BUGLY_APP_ID, BuildConfig.DEBUG);
	}

	@Nullable
	@Override
	public String getJSBundleFile() {
		return CodePush.getJSBundleFile();
	}

	@Override
	public boolean isDebug() {
		return BuildConfig.DEBUG;
	}

	@Nullable
	@Override
	public List<ReactPackage> createAdditionalReactPackages() {
		return Arrays.<ReactPackage>asList(
				new VectorIconsPackage(),
				new CodePush(BuildConfig.CODEPUSH_KEY, getApplicationContext(), BuildConfig.DEBUG)
		);
	}
}
