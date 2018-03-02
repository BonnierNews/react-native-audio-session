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

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(setCategory:(NSString *)category options:(NSString *)options)
{
    if (category != nil) {
        if (options != nil) {
            [[AVAudioSession sharedInstance] setCategory:category withOptions:options error:nil];
        } else {
            [[AVAudioSession sharedInstance] setCategory:category error:nil];
        }
        RCTLogInfo(@"[react-native-audio-session]: Set audio session to category %@ and options %@", category, options);
    }
}

@end
