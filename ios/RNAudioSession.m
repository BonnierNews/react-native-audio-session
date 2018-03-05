//
//  RNAudioSession.m
//  RNAudioSession
//
//  Created by Johan Kasperi (DN) on 2018-03-02.
//

#import "RNAudioSession.h"
#import <React/RCTLog.h>
#import <AVFoundation/AVFoundation.h>

@implementation RNAudioSession

static NSDictionary *_categories;
static NSDictionary *_options;
static NSDictionary *_modes;

+ (void)initialize {
    _categories = @{
        @"Ambient": AVAudioSessionCategoryAmbient,
        @"SoloAmbient": AVAudioSessionCategorySoloAmbient,
        @"Playback": AVAudioSessionCategoryPlayback,
        @"Record": AVAudioSessionCategoryRecord,
        @"PlayAndRecord": AVAudioSessionCategoryPlayAndRecord,
        @"MultiRoute": AVAudioSessionCategoryMultiRoute
   };
    _options = @{
        @"MixWithOthers": @(AVAudioSessionCategoryOptionMixWithOthers),
        @"DuckOthers": @(AVAudioSessionCategoryOptionDuckOthers),
        @"InterruptSpokenAudioAndMixWithOthers": @(AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers),
        @"AllowBluetooth": @(AVAudioSessionCategoryOptionAllowBluetooth),
        @"AllowBluetoothA2DP": @(AVAudioSessionCategoryOptionAllowBluetoothA2DP),
        @"AllowAirPlay": @(AVAudioSessionCategoryOptionAllowAirPlay),
        @"DefaultToSpeaker": @(AVAudioSessionCategoryOptionDefaultToSpeaker)
    };
    _modes = @{
        @"Default": AVAudioSessionModeDefault,
        @"VoiceChat": AVAudioSessionModeVoiceChat,
        @"VideoChat": AVAudioSessionModeVideoChat,
        @"GameChat": AVAudioSessionModeGameChat,
        @"VideoRecording": AVAudioSessionModeVideoRecording,
        @"Measurement": AVAudioSessionModeMeasurement,
        @"MoviePlayback": AVAudioSessionModeMoviePlayback,
        @"SpokenAudio": AVAudioSessionModeSpokenAudio
    };
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(category:(RCTResponseSenderBlock)callback)
{
    callback(@[[AVAudioSession sharedInstance].category]);
}

RCT_EXPORT_METHOD(categoryOptions:(RCTResponseSenderBlock)callback)
{
    callback(@[[AVAudioSession sharedInstance].categoryOptions]);
}

RCT_EXPORT_METHOD(mode:(RCTResponseSenderBlock)callback)
{
    callback(@[[AVAudioSession sharedInstance].mode]);
}

RCT_EXPORT_METHOD(setCategory:(NSString *)category options:(NSString *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString* cat = _categories[category];
    if (cat != nil && [[AVAudioSession sharedInstance].availableCategories containsObject:cat]) {
        if (_options[options] != nil) {
            [[AVAudioSession sharedInstance] setCategory:cat withOptions:_options[options] error:nil];
        } else {
            [[AVAudioSession sharedInstance] setCategory:category error:nil];
        }
        resolve(@[]);
    } else {
        NSDictionary *userInfo = @{
            NSLocalizedDescriptionKey: @"Could not set AVAudioSession category.",
            NSLocalizedFailureReasonErrorKey: @"The given category is not supported on this device.",
            NSLocalizedRecoverySuggestionErrorKey: @"Try another category."
        };
        NSError *error = [NSError errorWithDomain:@"RNAudioSession" code:-1 userInfo:userInfo];
        reject(@"setCategory", @"Could not set category.", error);
    }
}

RCT_EXPORT_METHOD(setMode:(NSString *)mode resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString* mod = _modes[mode];
    if (mod != nil && [[AVAudioSession sharedInstance].availableModes containsObject:mod]) {
        [[AVAudioSession sharedInstance] setMode:mod error:nil];
        resolve(@[]);
    } else {
        NSDictionary *userInfo = @{
                                   NSLocalizedDescriptionKey: @"Could not set AVAudioSession mode.",
                                   NSLocalizedFailureReasonErrorKey: @"The given mode is not supported on this device.",
                                   NSLocalizedRecoverySuggestionErrorKey: @"Try another mode."
                                   };
        NSError *error = [NSError errorWithDomain:@"RNAudioSession" code:-1 userInfo:userInfo];
        reject(@"setMode", @"Could not set mode.", error);
    }
}

RCT_EXPORT_METHOD(setCategoryAndMode:(NSString *)category mode:(NSString *)mode options:(NSString *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString* cat = _categories[category];
    NSString* mod = _modes[mode];
    if (cat != nil && mod != nil && _options[options] != nil && [[AVAudioSession sharedInstance].availableCategories containsObject:cat] && [[AVAudioSession sharedInstance].availableModes containsObject:mod]) {
        [[AVAudioSession sharedInstance] setCategory:cat mode:mod options:_options[options] error:nil];
        resolve(@[]);
    } else {
        NSDictionary *userInfo = @{
                                   NSLocalizedDescriptionKey: @"Could not set AVAudioSession category and mode.",
                                   NSLocalizedFailureReasonErrorKey: @"The given category or mode is not supported on this device.",
                                   NSLocalizedRecoverySuggestionErrorKey: @"Try another category or mode."
                                   };
        NSError *error = [NSError errorWithDomain:@"RNAudioSession" code:-1 userInfo:userInfo];
        reject(@"setCategory", @"Could not set category and mode.", error);
    }
}

@end
